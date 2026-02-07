#!/usr/bin/env python3
"""
Remove beige/cream background from DIGNITAS logo and make it truly transparent
"""

from PIL import Image
import numpy as np

def remove_background(input_path, output_path, threshold=200):
    """
    Remove light-colored background from image
    
    Args:
        input_path: Path to input PNG
        output_path: Path to output PNG
        threshold: RGB threshold (pixels brighter than this become transparent)
    """
    # Open image
    img = Image.open(input_path).convert('RGBA')
    data = np.array(img)
    
    # Get RGB channels
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Find pixels that are light colored (beige/cream/white background)
    # If all RGB channels are above threshold, make it transparent
    light_pixels = (r > threshold) & (g > threshold) & (b > threshold)
    
    # Also target specific beige/cream colors (adjust range as needed)
    # Beige is typically RGB(245, 245, 220) to RGB(255, 255, 240)
    beige_pixels = (r > 220) & (g > 220) & (b > 200) & (r < 256) & (g < 256) & (b < 256)
    
    # Combine conditions
    background_pixels = light_pixels | beige_pixels
    
    # Make background transparent
    data[background_pixels] = [0, 0, 0, 0]
    
    # Also increase transparency for semi-light pixels (feathering)
    semi_light = (r > threshold-30) & (g > threshold-30) & (b > threshold-30) & ~background_pixels
    data[semi_light, 3] = (data[semi_light, 3] * 0.5).astype(np.uint8)
    
    # Create new image
    result = Image.fromarray(data, 'RGBA')
    
    # Save with maximum compression
    result.save(output_path, 'PNG', optimize=True)
    print(f"✅ Saved transparent logo to: {output_path}")
    
    return result

if __name__ == '__main__':
    input_file = '/Users/gabadia/aigralys.ai/public/dignitas-logo.png'
    output_file = '/Users/gabadia/aigralys.ai/public/dignitas-logo-transparent.png'
    
    print(f"🔧 Processing: {input_file}")
    print(f"📝 Removing light background...")
    
    result = remove_background(input_file, output_file, threshold=200)
    
    print(f"✨ Done! Image size: {result.size}")

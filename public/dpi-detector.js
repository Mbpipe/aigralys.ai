/**
 * Display Metrics Detector and Converter
 * 
 * Detects platform (Android/iOS/Desktop) and calculates device DPI/PPI
 * Provides accurate conversions between mm and pixels accounting for screen density
 */

/** Inch to millimeter conversion constant */
const INCH_PER_MM = 1 / 25.4;

/**
 * Detect the platform based on user agent and touch capabilities
 * @returns {"android"|"ios"|"desktop"} The detected platform
 */
function detectPlatform() {
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isAppleTouch = (/iPhone|iPad|iPod|Macintosh/i.test(ua)) && (navigator.maxTouchPoints || 0) > 0;
  
  if (isAndroid) return "android";
  if (isAppleTouch) return "ios";
  return "desktop";
}

/**
 * Measure CSS pixels per inch by creating a 1in element
 * @returns {number} CSS pixels per inch (typically ~96)
 */
function measureCssPPI() {
  const div = document.createElement('div');
  div.style.width = '1in';
  div.style.height = '1in';
  div.style.position = 'absolute';
  div.style.left = '-9999px';
  div.style.top = '-9999px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  const ppi = div.offsetWidth;
  document.body.removeChild(div);
  return ppi || 96;
}

/**
 * Get display metrics for the current device
 * @returns {{platform: string, dpr: number, cssPixelsPerInch: number, dpi: number}}
 */
function getDisplayMetrics() {
  const platform = detectPlatform();
  const dpr = window.devicePixelRatio || 1;
  const cssPixelsPerInch = measureCssPPI();
  let dpi = cssPixelsPerInch * dpr;

  // Sanitize: if dpi is not finite or outside reasonable bounds
  if (!isFinite(dpi) || dpi < 72 || dpi > 700) {
    dpi = 160 * dpr; // fallback
  }

  return { platform, dpr, cssPixelsPerInch, dpi };
}

/**
 * Convert millimeters to device pixels
 * @param {number} mm - Size in millimeters
 * @param {number} dpi - Device DPI
 * @returns {number} Size in device pixels
 */
function mmToPx(mm, dpi) {
  return mm * INCH_PER_MM * dpi;
}

/**
 * Convert device pixels to millimeters
 * @param {number} px - Size in device pixels
 * @param {number} dpi - Device DPI
 * @returns {number} Size in millimeters
 */
function pxToMm(px, dpi) {
  return px / (dpi * INCH_PER_MM);
}

/**
 * Convert millimeters to Android logical density-independent pixels (dp)
 * @param {number} mm - Size in millimeters
 * @returns {number} Size in Android dp
 */
function mmToAndroidDp(mm) {
  return mm * INCH_PER_MM * 160;
}

/**
 * Convert Android dp to device pixels
 * @param {number} dp - Size in Android dp
 * @param {number} dpi - Device DPI
 * @returns {number} Size in device pixels
 */
function androidDpToPx(dp, dpi) {
  return dp * (dpi / 160);
}

/**
 * Convert millimeters to iOS logical points (pt)
 * @param {number} mm - Size in millimeters
 * @returns {number} Size in iOS pt
 */
function mmToIosPt(mm) {
  return mm * INCH_PER_MM * 72;
}

/**
 * Convert iOS points to device pixels
 * @param {number} pt - Size in iOS pt
 * @param {number} dpr - Device pixel ratio
 * @returns {number} Size in device pixels
 */
function iosPtToPx(pt, dpr) {
  return pt * dpr;
}

/**
 * Demo function: Print conversions for a given size in mm
 * @param {number} mm - Size in millimeters to test (default 142)
 */
function demoConversions(mm = 142) {
  const { platform, dpr, cssPixelsPerInch, dpi } = getDisplayMetrics();

  const px = Math.round(mmToPx(mm, dpi));
  const dp = Math.round(mmToAndroidDp(mm));
  const dp_px = Math.round(androidDpToPx(dp, dpi));
  const pt = Math.round(mmToIosPt(mm));
  const pt_px = Math.round(iosPtToPx(pt, dpr));

  console.table({
    platform,
    dpr,
    cssPixelsPerInch,
    dpi_estimate: dpi,
    [`${mm}mm_in_px`]: px,
    [`${mm}mm_in_dp(Android)`]: dp,
    [`dp_in_px(Android)`]: dp_px,
    [`${mm}mm_in_pt(iOS)`]: pt,
    [`pt_in_px(iOS)`]: pt_px
  });

  return { platform, dpr, cssPixelsPerInch, dpi, px, dp, dp_px, pt, pt_px };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    INCH_PER_MM,
    detectPlatform,
    measureCssPPI,
    getDisplayMetrics,
    mmToPx,
    pxToMm,
    mmToAndroidDp,
    androidDpToPx,
    mmToIosPt,
    iosPtToPx,
    demoConversions
  };
}


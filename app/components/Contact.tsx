'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'consultoria',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', formData)
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: 'consultoria',
          message: '',
        })
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="relative section-padding bg-gradient-dark" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-azul rounded-full animate-pulse" />
            <span className="text-azul text-sm font-medium">{t.contact.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-humo mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-humo/70 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-humo mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-humo focus:outline-none focus:border-azul transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-humo mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-humo focus:outline-none focus:border-azul transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-humo mb-2">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-humo focus:outline-none focus:border-azul transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-humo mb-2">
                  {t.contact.form.interest}
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-humo focus:outline-none focus:border-azul transition-colors"
                >
                  <option value="consultoria">{t.contact.form.interestOptions.consultoria}</option>
                  <option value="workshop">{t.contact.form.interestOptions.workshop}</option>
                  <option value="both">{t.contact.form.interestOptions.both}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-humo mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-humo focus:outline-none focus:border-azul transition-colors resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
                {t.contact.form.success}
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">
                {t.contact.form.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-gradient-blue text-white font-button text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-azul/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}


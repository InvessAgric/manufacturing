import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import { socialWhatsappIcon } from '../assets/assetRegistry'

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  // Controls the kind of enquiry being submitted: sales, product, or career.
  const [purpose, setPurpose] = useState('general')

  // Stores the visitor's contact information and enquiry content.
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [productName, setProductName] = useState('')
  const [details, setDetails] = useState('')
  const isEmailJsConfigured = Boolean(emailJsServiceId && emailJsTemplateId && emailJsPublicKey)

  // Sends the enquiry payload through EmailJS and resets the form on success.
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isEmailJsConfigured) {
      window.alert('Contact form is temporarily unavailable. Please contact us by email or phone directly.')
      return
    }

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedTelephone = telephone.trim()
    const trimmedProductName = productName.trim()
    const trimmedDetails = details.trim()

    const requestDetails = [
      `Name: ${trimmedName || 'Not provided'}`,
      `Email: ${trimmedEmail || 'Not provided'}`,
      `Telephone: ${trimmedTelephone || 'Not provided'}`,
      `Enquiry type: ${purpose === 'product' ? 'Product enquiry' : purpose === 'career' ? 'Career enquiry' : 'General sales enquiry'}`,
      purpose === 'product' ? `Product: ${trimmedProductName || 'Not specified'}` : null,
      `Message: ${trimmedDetails || 'No additional details provided'}`,
    ]
      .filter(Boolean)
      .join('\n')

    emailjs.send(
      emailJsServiceId,
      emailJsTemplateId,
      {
        from_name: trimmedName,
        from_email: trimmedEmail,
        telephone: trimmedTelephone,
        enquiry_type: purpose === 'product' ? 'Product enquiry' : purpose === 'career' ? 'Career enquiry' : 'General sales enquiry',
        product_name: trimmedProductName || 'Not specified',
        message: requestDetails,
        to_email: 'info@invessagric.com',
      },
      emailJsPublicKey
    )
      .then(() => {
        window.alert('Your enquiry has been sent successfully.')
        setName('')
        setEmail('')
        setTelephone('')
        setProductName('')
        setDetails('')
        setPurpose('general')
      })
      .catch(() => {
        window.alert('Sorry, your enquiry could not be sent right now. Please contact us by email directly.')
      })
  }
  return (
    <section className="bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_35%),linear-gradient(180deg,#f8fafc_0%,#ecfdf5_100%)] px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-lime-600 p-8 text-white shadow-2xl shadow-emerald-900/20 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-50">
                Contact sales
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Speak with our sales team about your next farm solution.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-emerald-50/95">
                Request product details, pricing information, distributor support, or a consultation for your farm and business needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/233242022517?text=Hello%20Invess%20Agric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  <img src={socialWhatsappIcon} alt="WhatsApp" className="h-5 w-5" loading="lazy" />
                  WhatsApp sales
                </a>
                <Link
                  to="/product"
                  className="inline-flex rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  View products
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-slate-950/70 p-8 text-white shadow-2xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Sales contact</p>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+233242022517" className="mt-1 inline-block transition hover:text-emerald-300">
                    +233 24 202 2517
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@invessagric.com" className="mt-1 inline-block transition hover:text-emerald-300">
                    info@invessagric.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="mt-1">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-emerald-100">
            <h2 className="text-2xl font-semibold text-slate-900">Make an enquiry</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="telephone">
                  Telephone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  value={telephone}
                  onChange={(event) => setTelephone(event.target.value)}
                  placeholder="e.g. +233 24 000 0000"
                  className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="purpose">
                  Select enquiry type
                </label>
                <select
                  id="purpose"
                  value={purpose}
                  onChange={(event) => setPurpose(event.target.value)}
                  className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
                >
                  <option value="general">General sales enquiry</option>
                  <option value="product">Product enquiry</option>
                  <option value="career">Career enquiry</option>
                </select>
              </div>

              {purpose === 'product' && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="productName">
                    Product name or category
                  </label>
                  <input
                    id="productName"
                    type="text"
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                    placeholder="e.g. Chaleee NPK 20:10:10+7S"
                    className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="details">
                  Your sales message
                </label>
                <textarea
                  id="details"
                  rows="5"
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder={purpose === 'product' ? 'Tell us what you want to know about the product...' : 'Share your enquiry details here...'}
                  className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={!isEmailJsConfigured}
                className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Send sales enquiry
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 p-8 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">Office hours</p>
              <div className="mt-6 space-y-4 text-sm text-emerald-50">
                <div className="flex items-center justify-between rounded-[1rem] bg-white/10 px-4 py-3">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-[1rem] bg-white/10 px-4 py-3">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-[1rem] bg-white/10 px-4 py-3">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <a
                href="mailto:info@invessagric.com"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Send us an email
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-sm">
              <div className="border-b border-emerald-100 bg-emerald-50 px-5 py-4">
                <h3 className="text-lg font-semibold text-emerald-800">Our location</h3>
                <p className="mt-1 text-sm text-emerald-700">View us on Google Maps</p>
              </div>
              <iframe
                title="Invess Agric location"
                src="https://www.google.com/maps?q=JR63%2B57X%20Invess%20Agriculture%20and%20Manufacturing%20limited%2C%20Kojo%20Ashong%20Ave%2C%20Accra%2C%20Ghana&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

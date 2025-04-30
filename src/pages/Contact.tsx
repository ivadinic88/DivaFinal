import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
} from 'lucide-react'
import Button from '../components/Button'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail', // service ID
        'template_02drx1g', // template ID
        form.current!,
        'JdM3oTsxjv4HQWM6q' // public key
      )
      .then(
        () => {
          alert('Message sent successfully!')
          form.current?.reset()
        },
        (error) => {
          console.error('EmailJS error:', error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Contact <span className="text-[#c19a6b] font-medium">Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out with any questions about our
          products or for business inquiries.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm h-full">
            <h2 className="text-2xl font-light text-gray-800 mb-6">
              Get in <span className="text-[#c19a6b] font-medium">Touch</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#f3f8f4] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPinIcon size={20} className="text-[#9ac1a0]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Only online
                    <br />
                    For now!
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#f3f8f4] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <PhoneIcon size={20} className="text-[#9ac1a0]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+381 62 335 254</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#f3f8f4] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MailIcon size={20} className="text-[#9ac1a0]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    info@divakozmetika.com
                    <br />
                    support@divakozmetika.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#f3f8f4] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <ClockIcon size={20} className="text-[#9ac1a0]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday: 10am - 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-light text-gray-800 mb-6">
              Send Us a{' '}
              <span className="text-[#c19a6b] font-medium">Message</span>
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9ac1a0] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9ac1a0] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9ac1a0] focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9ac1a0] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-10">
          Frequently Asked{' '}
          <span className="text-[#c19a6b] font-medium">Questions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">
              How do I choose the right product for my skin type?
            </h3>
            <p className="text-gray-600">
              If you're unsure which product is best for your skin type, feel
              free to contact our customer service. We're happy to help you
              choose the right product based on your needs and concerns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">
              Are your products suitable for sensitive skin?
            </h3>
            <p className="text-gray-600">
              Yes, most of our products are formulated with gentle, natural
              ingredients suitable for sensitive skin. Always check the product
              description for specific information.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">
              Do you ship internationally?
            </h3>
            <p className="text-gray-600">
              Yes, we ship to most countries worldwide. Shipping times and costs
              vary depending on your location. Please check our shipping policy
              for more details.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-800 mb-2">
              What is your return policy?
            </h3>
            <p className="text-gray-600">
              We offer a 30-day satisfaction guarantee. If you're not completely
              satisfied with your purchase, you can return it for a full refund
              or exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

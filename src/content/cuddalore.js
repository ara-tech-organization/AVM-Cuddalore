import { asset } from '../lib/asset'

export const clinic = {
  name: 'AVM Smiles',
  // contact details come from the Cuddalore "Contact Us" page of the client's content doc
  phone: '+91 8071404433',
  phoneHref: 'tel:+918071404433',
  // TODO: the doc lists no WhatsApp number for Cuddalore; using the clinic phone, confirm with the client
  whatsappHref: 'https://wa.me/918071404433',
  email: 'avmsmiles.cuddalore@gmail.com',
  address: 'No 7, Third Floor, SP Towers, Soorappanaickan Chavadi Veli, Railway Flyover Road, nearby First Cry Store, Thirupapuliyur, Cuddalore, Tamil Nadu 607002',
  shortAddress: 'Railway Flyover Road, Cuddalore',
  hours: 'Monday - Saturday: 9:00 AM - 7:00 PM', // Contact Us page says 7 PM; the doc's footer outline says 8 PM
  mapsHref: 'https://maps.app.goo.gl/yq5rwbJ6iUkqeLoB9',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250157.42937585103!2d79.56135828953126!3d11.572646896862018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5499aff46ff303%3A0x43430f6f8aaa24a9!2sAVMSmiles%20Dental%20Wellness!5e0!3m2!1sen!2sin!4v1792145025082!5m2!1sen!2sin',
  // from the Cuddalore Contact Us page of the content doc; it gives no YouTube URL, so that icon is hidden until one is added
  social: { facebook: 'https://www.facebook.com/smiles.cuddalore', instagram: 'https://www.instagram.com/avmsmiles.cuddalore/', youtube: '' },
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services', dropdown: true },
  { label: 'Smile Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const heroChips = [
  'Experienced Dental Team',
  'Advanced Digital Diagnostics',
  'Gentle, Comfort-First Treatment',
  'Individualized Smile Plans',
  'Clear, Affordable Pricing',
]

export const services = [
  { icon: 'Scissors', title: 'Tooth Extraction', slug: 'tooth-extraction', image: asset('/assets/images/site/tooth-extraction.webp'), text: 'Safe, well-managed tooth extractions performed by experienced dentists using current techniques and effective anesthesia.' },
  { icon: 'Crown', title: 'Crowns & Bridges', slug: 'dental-crowns-and-bridges', image: asset('/assets/images/site/dental-crowns-and-bridges.jpg'), text: 'Replace missing or damaged teeth with strong, natural-looking crowns and bridges built for lasting use.' },
  { icon: 'Smile', title: 'Dentures', slug: 'dental-dentures', image: asset('/assets/images/site/dental-dentures.png'), text: 'Comfortable removable and fixed denture options crafted to replace missing teeth and restore your smile.' },
  { icon: 'Activity', title: 'Root Canal Treatment', slug: 'root-canal-treatment', image: asset('/assets/images/site/root-canal-treatment.jpg'), text: 'Relieve pain and treat infected teeth through advanced root canal care that preserves natural tooth structure.' },
  { icon: 'Sparkles', title: 'Teeth Whitening', slug: 'teeth-whitening-treatment', image: asset('/assets/images/site/teeth-whitening-treatment.webp'), text: 'Effective whitening treatments that lift persistent stains and brighten your smile several shades.' },
  { icon: 'Droplets', title: 'Scaling & Polishing', slug: 'dental-scaling-polishing', image: asset('/assets/images/site/dental-scaling-polishing.jpg'), text: 'Detailed cleaning sessions that clear plaque, tartar, and stains to support optimal oral health.' },
  { icon: 'Layers', title: 'Invisible Aligners', slug: 'invisible-aligners', image: asset('/assets/images/site/invisible-aligners.webp'), text: 'Clear, removable aligners that gradually shift teeth into place, offering a discreet alternative to braces.' },
  { icon: 'Grip', title: 'Braces', slug: 'invisible-braces', image: asset('/assets/images/site/invisible-braces.jpg'), text: 'Full orthodontic care for children, teens, and adults to address alignment and bite concerns.' },
  { icon: 'Gem', title: 'Veneers', slug: 'dental-veneer-treatment', image: asset('/assets/images/site/dental-veneer-treatment.jpg'), text: 'Custom-crafted veneers designed to improve the shape, shade, and overall look of your teeth.' },
  { icon: 'Anchor', title: 'Dental Implants', slug: 'dental-implants-treatment', image: asset('/assets/images/site/dental-implants-treatment.webp'), text: 'Long-term tooth replacement solutions that look, feel, and function just like natural teeth.' },
]

export const why = [
  { icon: 'Cpu', title: 'Modern Technology', text: 'Digital diagnostic tools and updated treatment methods for precise, comfortable dental care.' },
  { icon: 'GraduationCap', title: 'Skilled Specialists', text: 'Dentists with focused training and hands-on experience across multiple dental fields.' },
  { icon: 'UserCheck', title: 'Patient-First Approach', text: "Personalized treatment plans shaped around each patient's specific needs and goals." },
  { icon: 'ShieldCheck', title: 'Safety & Hygiene', text: 'Rigorous sterilization procedures that align with international clinical standards.' },
  { icon: 'Wallet', title: 'Transparent Costs', text: 'Clear treatment pricing with no hidden charges or unexpected fees.' },
  { icon: 'Armchair', title: 'Welcoming Clinic', text: 'A comfortable, friendly space where patients feel at ease during every visit.' },
]

export const steps = [
  { icon: 'Stethoscope', title: 'Consultation', text: 'Complete dental examination alongside a discussion of your treatment options.' },
  { icon: 'ScanLine', title: 'Diagnosis', text: 'Digital evaluation used to develop an accurate treatment plan.' },
  { icon: 'ClipboardList', title: 'Personalized Treatment Plan', text: 'Customized care recommendations based on your dental needs.' },
  { icon: 'HeartPulse', title: 'Treatment', text: 'Skilled treatment delivered using modern techniques and equipment.' },
  { icon: 'CalendarClock', title: 'Follow-Up Care', text: 'Ongoing guidance to help maintain your oral health and smile.' },
]

export const testimonials = [
  'My treatment at AVM Smiles Cuddalore was handled with real care. The dentist was patient, explained every step, and made sure I stayed comfortable throughout.',
  "I visited for a dental procedure and was genuinely impressed by the team's professionalism. Their modern equipment paired with attentive service made the experience easy.",
  "The staff at AVM Smiles Cuddalore were friendly and clear about each stage of my treatment. The clinic was clean and comfortable, and I'd recommend it without hesitation.",
]

export const faqs = [
  ['What is the best dental clinic in Cuddalore?', 'AVM Smiles is a well-known dental clinic in Cuddalore, recognized for its skilled dentists, modern equipment, and personalized attention, offering complete dental care for individuals and families nearby.'],
  ['Do you provide dental implants?', 'Yes, we offer dental implants for single teeth, multiple teeth, and full mouth restoration, helping restore natural appearance and function.'],
  ['Do you offer invisible aligners?', 'Yes, we provide custom invisible aligners as a comfortable and discreet way to straighten teeth, often a good alternative to traditional braces.'],
  ['How regularly should I visit the dentist?', 'A dental checkup every six months is advised to maintain good oral health and catch issues before they progress.'],
  ['Is teeth whitening a safe treatment?', 'Yes, our teeth whitening procedures are carried out under expert supervision, ensuring safe, comfortable, and effective results.'],
  ['Do you provide emergency dental services?', 'Yes, we offer emergency care for tooth pain, infections, broken teeth, and dental injuries to ease discomfort and prevent complications.'],
]

export const gallerySlots = [
  { label: 'Modern treatment room', src: asset('/assets/images/site/clinic-interior.jpg') },
  { label: 'Dental chair and equipment', src: asset('/assets/images/site/who-we-are.png') },
  { label: 'Our clinic', src: asset('/assets/images/site/clinic-cta.jpg') },
  { label: 'A higher standard of dental care', src: asset('/assets/images/site/higher-standard.jpg') },
  { label: 'Smiling patient', src: asset('/assets/images/site/hero-patient.jpg') },
  { label: 'Dental implants care', src: asset('/assets/images/site/dental-implants-treatment.webp') },
]

export const transformations = [
  { title: 'Complete Smile Transformation', before: asset('/assets/images/site/before-1.png'), after: asset('/assets/images/site/after-1.png') },
  { title: 'Smile Makeover', before: asset('/assets/images/site/before-2.png'), after: asset('/assets/images/site/after-2.png') },
  { title: 'Restored Confidence', before: asset('/assets/images/site/before-3.jpg'), after: asset('/assets/images/site/after-3.jpg') },
]

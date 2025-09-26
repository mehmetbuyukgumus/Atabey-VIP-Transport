import useTranslation from '../hooks/useTranslation.js';

/**
 * Footer displays contact information and copyright notice. It
 * automatically adapts to the current locale via the useTranslation hook.
 */
export default function Footer() {
  const t = useTranslation();
  const contact = t.contact;

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2>{contact.heading}</h2>
        <div className="contact-details">
          <div className="detail">
            <strong>{contact.phoneLabel}:</strong> {contact.phone}
          </div>
          <div className="detail">
            <strong>{contact.whatsappLabel}:</strong> {contact.whatsapp}
          </div>
          <div className="detail">
            <strong>{contact.emailLabel}:</strong> {contact.email}
          </div>
          <div className="detail">
            <strong>{contact.addressLabel}:</strong> {contact.address}
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} VIP Transport. {t.footer.rights}
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #111;
          color: #fff;
          padding: 2rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        h2 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .detail strong {
          margin-right: 0.5rem;
        }
        .copyright {
          font-size: 0.875rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 1rem;
        }
      `}</style>
    </footer>
  );
}
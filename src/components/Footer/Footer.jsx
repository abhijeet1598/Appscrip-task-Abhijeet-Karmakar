import { ChevronDown } from "lucide-react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.subscribeSection}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <hr className={styles.hr} />

        <div className={styles.footerColumn}>
          <h5>CONTACT US</h5>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <hr className={styles.hr} />

          <h5>CURRENCY</h5>
          <div className={styles.currencyWrapper}>
            <Image
              src={"/usa-flag.png"}
              alt="USA flag"
              width={24}
              height={24}
            />
            <span>USD</span>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.footerRow}>
        <div className={styles.footerColumn}>
          <div className={styles.mobileFooterRow}>
            <h5>mettā muse</h5>
            <ChevronDown className="mobile-show" />
          </div>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <hr className={styles.hr} />

        <div className={styles.footerColumn}>
          <div className={styles.mobileFooterRow}>
            <h5>QUICK LINKS</h5>
            <ChevronDown className="mobile-show" />
          </div>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <hr className={styles.hr} />

        <div className={styles.footerColumn}>
          <div className={styles.mobileFooterRow}>
            <h5>FOLLOW US</h5>
            <ChevronDown className="mobile-show" />
          </div>
          <div className={styles.socialIcons}>
            <Image src="/insta.png" alt="Instagram" width={24} height={24} />
            <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
          </div>

          <hr className={styles.hr} />

          <div>
            <h5>mettā muse ACCEPTS</h5>
            <div className={styles.paymentMethods}>
              <Image src="/gpay.png" alt="Google Pay" width={40} height={24} />
              <Image
                src="/mastercard.png"
                alt="MasterCard"
                width={40}
                height={24}
              />
              <Image src="/paypal.png" alt="PayPal" width={40} height={24} />
              <Image src="/amex.png" alt="Amex" width={40} height={24} />
              <Image
                src="/applepay.png"
                alt="Apple Pay"
                width={40}
                height={24}
              />
              <Image src="/stripe.png" alt="Visa" width={40} height={24} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

export default function MarqueeComponent() {
  return (
    <div className="mx-auto max-w-xxl floater my-4 relative bg-transparent px-4 sm:px-6 logo-wrapper">
      <div className="bg-transparent py-2 lg:py-2">
        <div className="flex flex-col items-center text-center lg:flex-row">
          <div className="w-full px-2 py-2 lg:w-auto lg:py-1">
            <div className="whitespace-nowrap font-satisfy text-3xl text-indigo-500">
              Jobs From
            </div>
          </div>
          <div className="overflow-hidden relative py-1 w-full lg:w-auto ">
            <div
              className="flex w-full animate-marquee space-x-12"
              style={{
                animation: "marquee 10s linear infinite",
              }}
            >
              <img src="/images/samsung.png" alt="Samsung" className="logo" />
              <img src="/images/tencent.png" alt="Tencent" className="logo" />
              <img src="/images/amazon.png" alt="Amazon" className="logo" />
              <img src="/images/facebook.png" alt="Facebook" className="logo" />
              <img src="/images/visa.png" alt="Visa" className="logo" />
              <img src="/images/insta.png" alt="Instagram" className="logo" />
              <img src="/images/oracle.png" alt="Oracle" className="logo" />
              <img src="/images/spotify.png" alt="Spotify" className="logo" />
              <img src="/images/google.png" alt="Google" className="logo" />
              <img src="/images/netflix.png" alt="Netflix" className="logo" />
              <img src="/images/apple.png" alt="Apple" className="logo" />
              <img src="/images/intel.png" alt="Intel" className="logo" />
              <img src="/images/youtube.png" alt="YouTube" className="logo" />
              <img src="/images/dropbox.png" alt="Dropbox" className="logo" />
              <img
                src="/images/mastercard.png"
                alt="Mastercard"
                className="logo"
              />
              <img src="/images/cisco.png" alt="Cisco" className="logo" />
              <img src="/images/huawei.png" alt="Huawei" className="logo" />
              <img src="/images/paypal.png" alt="PayPal" className="logo" />
              <img src="/images/nikon.png" alt="Nikon" className="logo" />
              <img
                src="/images/microsoft.png"
                alt="Microsoft"
                className="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .logo {
          width: 80px;
          height: 40px;
          object-fit: contain; /* Ensures logos keep their aspect ratio within the specified dimensions */
        }

        @media (min-width: 768px) {
          .logo {
            width: 120px;
            height: 60px;
          }
        }

        .logo-wrapper {
          position: relative; /* Ensures that the pseudo-element is positioned correctly */
        }

        .logo-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(to left, #000000c5, #10078a01);
          opacity: 0.6; /* Adjust opacity as needed */
          pointer-events: none; /* Ensure overlay does not block interaction */
        }
      `}</style>
    </div>
  );
}

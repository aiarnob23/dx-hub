   
export default function Footer() {
  return (
    <div className="">
      <footer className="footer px-16 bg-primary antialiased text-white mt-16 p-10">
        <aside className="flex flex-col h-full justify-center">
          <p className="text-2xl">
            Ready to
            <br />
            get start.
          </p>
          <button className="bg-[#7087E4] px-2 text-white rounded-lg">
            Contact Us
          </button>
        </aside>
        <nav>
          <h6 className="text-xl">Services</h6>
          <a className="link link-hover">Brand Identity</a>
          <a className="link link-hover">Website Design</a>
          <a className="link link-hover">Social Media Design</a>
        </nav>
        <nav>
          <h6 className="text-xl">About us</h6>
          <a className="link link-hover">Our mission</a>
          <a className="link link-hover">Team</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <h6 className="text-xl">Contact</h6>
          <a className="link link-hover" href="tel:+8801672064713">
            +8801672064713
          </a>
          <a className="link link-hover" href="mailto:info@thedxhub.com">
            info@thedxhub.com
          </a>
          <a className="link link-hover" href="mailto:thedxhub@gmail.com">
            thedxhub@gmail.com
          </a>
        </nav>
      </footer>
    </div>
  );
}
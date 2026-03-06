import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 px-4 mt-10 pt-16 pb-8">

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">
                        CS — Ticket System
                    </h2>
                    <p className="text-sm leading-6">
                        CS — Ticket System is a customer support management application that allows support agents to track, manage, and resolve customer issues efficiently. The system displays tickets with details such as title, description, priority level, and customer information.
                    </p>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                    <h6 className="footer-title text-white">Company</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Our Mission</a>
                        <a className="link link-hover">Contact Sales</a>

                </div>

                {/* Services */}
                <div className="flex flex-col gap-2">
                    <h6 className="footer-title text-white">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </div>

                {/* Information */}
                <div className="flex flex-col gap-2">
                    <h6 className="footer-title text-white">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </div>

                {/* Social */}
                <div>
                    <h6 className="footer-title text-white">Social Links</h6>

                    <div className="flex items-center gap-2 mb-2">
                        <FaFacebook /> <span>@CS — Ticket System</span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <FaInstagram /> <span>@CS — Ticket System</span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <FaLinkedin /> <span>@CS — Ticket System</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEnvelope /> <span>support@cst.com</span>
                    </div>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                © 2025 CS — Ticket System. All rights reserved.
            </div>

        </footer>
    );
}
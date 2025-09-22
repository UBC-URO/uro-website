import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* <section className="bg-muted py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Get In Touch</h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                                Contact Us Today
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Send us a message</h2>
                                <p className="text-xl text-muted-foreground max-w-2xl">Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>
                            <ContactForm />
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Information</h2>
                                <p className="text-xl text-muted-foreground">Reach out to us through any of these channels.</p>
                            </div>
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>

            {/* <footer className="bg-card border-t border-border py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <span className="text-lg font-bold text-foreground">Your Company</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Support
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-border text-center">
                        <p className="text-muted-foreground">© 2025 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer> */}
        </div>
    );
}

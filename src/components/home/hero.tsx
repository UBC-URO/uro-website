import { Card, CardContent } from "@/components/ui/card";
import { Users, Megaphone, Cpu, Play } from "lucide-react";
import CarouselComponent from "./carousel";

export default function Hero() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-muted py-20 mb-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">UBC's Undergraduate Research Opportunities Club</h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                            Find out how you can get involved with research, events, and opportunities to connect with peers and professionals.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                                Upcoming Events
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three-Column Feature Area */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Stats</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Whether you're a student or a professor, our club provides everything you need to support your research.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Students */}
                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent className="space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Megaphone className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-5xl font-bold text-foreground">50+</h3>
                                <p className="text-2xl text-muted-foreground">Events Hosted</p>
                            </CardContent>
                        </Card>

                        {/* Advertisers */}
                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent className="space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-5xl font-bold text-foreground">5000+</h3>
                                <p className="text-2xl text-muted-foreground">Student Attendees</p>
                            </CardContent>
                        </Card>

                        {/* Technology */}
                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent className="space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Cpu className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-5xl font-bold text-foreground">25+</h3>
                                <p className="text-2xl text-muted-foreground">Student Publishings</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Event Photos</h2>
                        </div>
                        <CarouselComponent />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-card border-t border-border py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <span className="text-lg font-bold text-foreground">URO</span>
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
                        <p className="text-muted-foreground">© 2025 URO. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

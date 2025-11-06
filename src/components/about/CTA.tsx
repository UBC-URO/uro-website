import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <>
            <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white border-none shadow-xl rounded-3xl">
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold">Ready to Start Your Research Journey?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg md:text-xl opacity-95 mb-8">Join URO today and become part of a community that’s passionate about undergraduate research and academic excellence.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200" asChild>
                            <a href="https://linktr.ee/uroubc">Join Our Community</a>
                        </Button>
                        <Button
                            variant="outline"
                            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-200"
                            asChild
                        >
                            <a href="/about" className="inline-flex items-center">
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

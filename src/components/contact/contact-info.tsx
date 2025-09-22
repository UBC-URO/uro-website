import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

export function ContactInfo() {
    const contactDetails = [
        {
            icon: Mail,
            title: "Email",
            content: "uro.ubc@gmail.com",
            description: "Send us an email anytime!",
        },
        {
            icon: Instagram,
            title: "Instagram",
            content: "@uro_ubc",
            description: "Check out all our latest updates and events.",
        },
    ];

    return (
        <div className="space-y-6">
            {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-teal-500 p-3 rounded-lg">
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg text-card-foreground mb-1">{detail.title}</h3>
                                    <p className="text-primary font-medium mb-1">{detail.content}</p>
                                    <p className="text-muted-foreground text-sm">{detail.description}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}

            {/* Company Description */}
            {/* <Card className="shadow-md">
                <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-card-foreground mb-3">About Our Company</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        We're a dedicated team committed to providing exceptional service and innovative solutions. Our mission is to help businesses grow and succeed through cutting-edge technology
                        and personalized support.
                    </p>
                </CardContent>
            </Card> */}
        </div>
    );
}

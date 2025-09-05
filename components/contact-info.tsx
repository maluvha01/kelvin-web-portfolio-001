import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle, Mail, MapPin, Clock, Coffee } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6 animate-fade-in-up animation-delay-200">
      {/* Contact Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Get In Touch</CardTitle>
          <CardDescription>Choose your preferred way to connect with me</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full justify-start hover:animate-shake bg-transparent"
            asChild
          >
            <a href="https://linkedin.com/in/kelvin-mutukwa" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-3 text-blue-600" />
              <div className="text-left">
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-muted-foreground">Kelvin Mutukwa</div>
              </div>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full justify-start hover:animate-shake bg-transparent"
            asChild
          >
            <a href="https://wa.me/263713882084" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-3 text-green-600" />
              <div className="text-left">
                <div className="font-medium">WhatsApp</div>
                <div className="text-sm text-muted-foreground">+263 71 388 2084</div>
              </div>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full justify-start hover:animate-shake bg-transparent"
            asChild
          >
            <a href="mailto:kelvinmutukwa30@gmail.com">
              <Mail className="w-5 h-5 mr-3 text-red-600" />
              <div className="text-left">
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">kelvinmutukwa30@gmail.com</div>
              </div>
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Card>
        <CardHeader>
          <CardTitle>Let's Collaborate</CardTitle>
          <CardDescription>What you can expect when working with me</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <div className="font-medium">Quick Response</div>
              <div className="text-sm text-muted-foreground">I typically respond within 24 hours</div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Coffee className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <div className="font-medium">Free Consultation</div>
              <div className="text-sm text-muted-foreground">30-minute discovery call to discuss your project</div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <div className="font-medium">Global Availability</div>
              <div className="text-sm text-muted-foreground">Remote collaboration with clients worldwide</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Start?</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Let's turn your vision into a reality. Whether it's a complete redesign or a new project from scratch, I'm
            here to help.
          </p>
          <Button className="hover:animate-shake" asChild>
            <a href="mailto:kelvinmutukwa30@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Start a Project
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

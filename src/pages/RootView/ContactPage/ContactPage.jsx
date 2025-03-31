
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <Card className="p-6 shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions? Reach out to us through the form or via the contact details below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" />
                <span>support@plumbingservice.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" />
                <span>123 Main St, Anytown, USA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="p-6 shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="w-full" />
              <Input type="email" placeholder="Your Email" className="w-full" />
              <Textarea placeholder="Your Message" className="w-full" rows={4} />
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;

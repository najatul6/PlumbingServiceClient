import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Have a question? Need help? Fill out the form or contact us directly.
        </p>
      </div>

      {/* Contact Form */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <Input type="text" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" placeholder="Your Email" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea placeholder="Your Message" rows={4} required />
            </div>
            <Button type="submit" variant="plumbingPrimary" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="space-y-2">
          <Mail className="mx-auto text-blue-600" size={28} />
          <p className="text-lg font-semibold">Email</p>
          <p className="text-gray-600">contact@plumbingservice.com</p>
        </div>
        <div className="space-y-2">
          <Phone className="mx-auto text-blue-600" size={28} />
          <p className="text-lg font-semibold">Phone</p>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div className="space-y-2">
          <MapPin className="mx-auto text-blue-600" size={28} />
          <p className="text-lg font-semibold">Address</p>
          <p className="text-gray-600">123 Plumbing St, NY, USA</p>
        </div>
      </div>

      {/* Google Maps */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631568037!3d-37.81627974202117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b1c2a3e5a4b6d8c!2sYour+Plumbing+Company!5e0!3m2!1sen!2sus!4v1633078809252!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Facebook, FacebookIcon, Instagram, X } from "lucide-react";

const ContactMe = () => {
  return (
    <section className="container mx-auto px-4 mt-15">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div className="border to to-black">
          <h1 className="text-2xl">join our newsletter</h1>
          <h2 className="mt-3.5">
            Nam ultrices ultrices nec tortor pulnivar esteras loremips est orem
          </h2>
          <h3>3045 10 Sunrize Avenue, 123-456-7890</h3>
          <h4>Mon – Fri: 9:00 am – 8:00 pm</h4>
          <h5>Sat – Sun: 9:00 am – 10 pm</h5>
          <h6>contact@mail.com</h6>
          <p>info@mail.com</p>
          <p className="mt-2.5 text-2xl">Follow Us</p>
          <div className="flex gap-2">
            <Facebook />
            <X />
            <Instagram />
          </div>
        </div>
        <div>
          <Card className="w-full max-w-sm">
            <CardHeader></CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center"></div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="enter your valid email"
                    />
                  </div>

                  <div className="grid w-full gap-6">
                    <Textarea placeholder="Type your message here." />
                    <Button>SUBMIT</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

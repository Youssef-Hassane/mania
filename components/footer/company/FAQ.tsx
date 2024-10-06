import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";




export default function FAQ() {
  return (
    <AlertDialog>
    <AlertDialogTrigger>F.A.Q</AlertDialogTrigger>
    <AlertDialogContent className="w-[70%] bg-custom-light-apricot text-custom-dark-gray border-none">
    <AlertDialogHeader>
        <ScrollArea className="h-[560px]">
          <div className="w-full text-center p-5">
            <strong className="text-3xl text-center">Frequently Asked Questions</strong>
          </div>

          <strong>1. How do I create an account?</strong>
          <p>To create an account, click on the "Sign Up" button on our homepage, fill in your personal information, and verify your email address through the confirmation link sent to you. Once verified, you can log in and start booking.</p>

          <strong>2. Can I cancel or modify my booking?</strong>
          <p>Yes, you can cancel or modify your booking through the "My Bookings" section of your account. Modifications are subject to availability, and any cancellations made within 48 hours of check-in may incur charges. Refer to our Refund Policy for more details.</p>

          <strong>3. How secure is my payment information?</strong>
          <p>Your security is our priority. All payment information is encrypted and securely processed through trusted third-party payment gateways. We do not store your payment details on our servers.</p>

          <strong>4. What payment methods do you accept?</strong>
          <p>We accept all major credit and debit cards, including Visa, Mastercard, and American Express. In some regions, alternative payment options like PayPal or local payment methods may be available.</p>

          <strong>5. Can I book multiple rooms at once?</strong>
          <p>Yes, you can book multiple rooms for your stay. When booking, simply select the number of rooms required and specify any additional details, such as the number of guests per room.</p>

          <strong>6. What if I arrive late for my check-in?</strong>
          <p>If you anticipate arriving later than your scheduled check-in time, please notify the hotel directly to ensure that your room is held for you. Some hotels may have specific policies for late check-ins.</p>

          <strong>7. How can I contact customer support?</strong>
          <p>If you have any issues or questions, feel free to reach out to our support team at <a href="mailto:support@hotelmania.com">support@hotelmania.com</a> or use the contact form on our website.</p>

          <strong>8. Do you offer special rates for group bookings?</strong>
          <p>Yes, we offer discounted rates for group bookings. Please contact our customer support team for more information on group reservations and discounts.</p>
        </ScrollArea>
      </AlertDialogHeader>
      <AlertDialogFooter>
      <AlertDialogAction className="text-custom-light-apricot">Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
}
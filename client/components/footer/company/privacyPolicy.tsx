import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";




export default function PrivacyPolicy() {
  return (
    <AlertDialog >
      <AlertDialogTrigger >Privacy policy</AlertDialogTrigger>
      <AlertDialogContent className="w-[70%] bg-custom-light-apricot text-custom-dark-gray border-none">
        <AlertDialogHeader>
          <ScrollArea className="h-[560px]">

            <div className="w-full text-center p-5">
              <strong className="text-3xl text-center"> Privacy Policy</strong>
            </div>
            <p>At <strong>HotelMania</strong>, your privacy is our priority. We are committed to safeguarding your personal information and ensuring it is collected, used, and disclosed in compliance with applicable privacy laws. By using our platform, you agree to the collection of necessary details such as name, contact information, and transaction data for the purpose of hotel reservations. We do not sell or share your data with third parties without consent unless required by law.</p>
            <strong>1. Data Security:</strong>
            <p> We utilize secure technologies to protect your personal information from unauthorized access, including encryption and firewalls.</p>
            <strong>2. Third-Party Services:</strong>
            <p> Our platform may link to third-party services like payment gateways, which have their own privacy policies. We recommend reviewing them.</p>
            <strong>3. User Rights:</strong>
            <p> You have the right to access, correct, or delete your personal information. For inquiries or concerns, please contact our support team.</p>
            <strong>4. Information We Collect:</strong>
            <p> We collect the following information:</p>
            <ul>
              <li>Personal details such as name, email address, phone number, and payment information.</li>
              <li>Reservation data including hotel preferences and booking history.</li>
              <li>Usage and device data for improving our platform's functionality.</li>
            </ul>
            <strong>5. How We Use Your Information:</strong>
            <p> We use your information to:</p>
            <ul>
              <li>Process bookings and payments.</li>
              <li>Improve the user experience by personalizing the platform.</li>
              <li>Communicate updates or confirmations regarding reservations.</li>
            </ul>
            <strong>6. How We Share Your Information:</strong>
            <p>We may share your information under certain circumstances such as with service providers or for legal compliance. We do not sell your data to third parties.</p>
            <strong>7. Cookies and Tracking:</strong>
            <p> We use cookies to enhance your browsing experience. You can disable cookies through your browser settings, but doing so may affect platform functionality.</p>
            <strong>8. Data Retention:</strong>
            <p> We retain your information for as long as necessary to provide services and for legal reasons. You can request deletion at any time by contacting us.</p>
            <strong>9. Children’s Privacy:</strong>
            <p> Our platform is not intended for individuals under 18 years old. If we find that a minor’s information has been collected, we will delete it.</p>
            <strong>10. Changes to the Privacy Policy:</strong>
            <p> We may update this policy, and any changes will be communicated via email or website notification.</p>
            <strong>Contact Us:</strong>
            <p> For any concerns or inquiries, reach out to us at <a href="mailto:support@hotelmania.com">support@hotelmania.com</a>.</p>
          </ScrollArea>
        </AlertDialogHeader>
        <AlertDialogFooter >
          <AlertDialogAction className="text-custom-light-apricot">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
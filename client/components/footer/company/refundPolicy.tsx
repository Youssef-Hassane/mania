import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";



export default function RefundPolicy() {
  return (
    <AlertDialog>
          <AlertDialogTrigger>Refund policy</AlertDialogTrigger>
          <AlertDialogContent className="w-[70%] bg-custom-light-apricot text-custom-dark-gray border-none">
          <AlertDialogHeader>
              <ScrollArea className="h-[560px]">
                <div className="w-full text-center p-5">
                  <strong className="text-3xl text-center ">Refund Policy</strong>
                </div>
                <p>At <strong>HotelMania</strong>, we strive to provide a hassle-free experience for all users. Below is our comprehensive refund policy:</p>

                <strong>1. Cancellation and Refund Eligibility:</strong>
                <p>To be eligible for a refund, cancellations must be made more than 48 hours before your check-in date. If a cancellation is made within the 48-hour window, the reservation may be subject to a partial or no refund based on the hotel's individual policy.</p>

                <strong>2. Refund Exceptions:</strong>
                <p>Some special bookings, including non-refundable offers or promotional rates, are not eligible for a refund. Please check the terms and conditions for each specific booking before completing your reservation.</p>

                <strong>3. Refund Process:</strong>
                <p>Refunds for eligible cancellations will be processed within 7-10 business days. All refunds will be issued back to the original payment method used during booking. Please note that the time it takes for the refund to reflect in your account may vary depending on your bank's policies.</p>

                <strong>4. Force Majeure:</strong>
                <p>If you need to cancel due to unforeseen events like natural disasters, political instability, or government restrictions (i.e., force majeure), we will work with our hotel partners to offer flexible solutions, which may include rebooking or partial refunds.</p>

                <strong>5. Modification of Bookings:</strong>
                <p>If you would like to modify your reservation, such as changing your check-in date or extending your stay, please contact our support team. We will attempt to accommodate these changes based on availability, but changes may incur additional charges or cancellation penalties depending on the hotel's policies.</p>

                <strong>6. Disputes and Resolution:</strong>
                <p>If you believe you are entitled to a refund but have not received one, please contact our support team at <a href="mailto:support@hotelmania.com">support@hotelmania.com</a>. We will investigate the issue and resolve it as promptly as possible.</p>

                <strong>7. Contact Us:</strong>
                <p>If you have any further questions regarding our refund policy, please contact us at <a href="mailto:support@hotelmania.com">support@hotelmania.com</a>.</p>
              </ScrollArea>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogAction className="text-custom-light-apricot">Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
  );
}
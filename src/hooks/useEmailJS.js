import { useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const useEmailJS = () => {
  const formRef = useRef(null);

  const sendEmail = useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_plv6rmn", "template_lblo9lr", formRef.current, {
        publicKey: "FPcg4H06c5n6lTxyg",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Your email has been sent successfully.",
            icon: "success",
            draggable: true,
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: `Failed to send email: ${error.text}`,
            icon: "error",
            confirmButtonText: "Try Again",
          });
          console.error("FAILED...", error.text);
        }
      );
  }, []);

  return { formRef, sendEmail };
};

export default useEmailJS;

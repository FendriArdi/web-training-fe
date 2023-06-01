import Swal from "sweetalert2";

export const ConfirmationAlert = (confirmFunction) =>
    Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Perubahan bersifat permanen dan tidak bisa diubah",
        confirmButtonText: "Ya",
        showCancelButton: true,
        cancelButtonText: "Batalkan",
        customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-secondary mr-3",
        },
        reverseButtons: true,
        buttonsStyling: false,
    }).then((result) => {
        if (result.isConfirmed) {
            confirmFunction();
        }
    });

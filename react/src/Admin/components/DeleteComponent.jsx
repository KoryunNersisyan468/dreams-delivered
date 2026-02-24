import Swal from "sweetalert2";

async function DeleteAll({ title, text, deleteItem }) {
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    cancelButtonText:"Ոչ",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Այո",
  }).then((result) => {
    if (result?.isConfirmed) {
      deleteItem();
    }
  });
}

export default DeleteAll;
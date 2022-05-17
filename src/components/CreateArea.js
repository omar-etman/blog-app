import React, { useState } from "react";
import { initialState, validationSchema } from "../lib/helper";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Link from "@mui/material/Link";
function CreateArea(props) {

  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: initialState,

    validationSchema: validationSchema,

    onSubmit: (values) => {
      const id = Date.now();
      const note = { ...values, id };
      setOpen(false)
        props.setNotes([...props.notes, note]);
        console.log(values);
    },
  });

  return (
    <div>
      <Link color="inherit" style={{ textDecoration: "none" }}  onClick={handleClickOpen}>
        Add A New Post
      </Link>
      <Dialog open={open} onClose={handleClose} >
        <DialogContent >
          <TextField
            onChange={formik.handleChange}
            value={formik.values.title}
            name="title"
            autoFocus
            margin="dense"
            id="title"
            label="title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={formik.handleChange}
            value={formik.values.author}
            autoFocus
            name="author"
            margin="dense"
            id="author"
            label="author"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={formik.handleChange}
            value={formik.values.content}
            name="content"
            id="standard-multiline-flexible"
            label="content"
            multiline
            maxRows={4}
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit"  onClick={formik.handleSubmit}>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}







//   const formik = useFormik({
//     initialValues: initialState,

//     validationSchema: validationSchema,

//     onSubmit: (values) => {
//       console.log(values);
//       const id = Date.now();
//       const note = { ...values, id };
//       props.setNotes([...props.notes, note]);
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           name="title"
//           onChange={formik.handleChange}
//           value={formik.values.title}
//           placeholder="Title"
//           onBlur={formik.handleBlur}
//         />

//         {formik.touched.title && formik.errors.title && (
//           <div>{formik.errors.title}</div>
//         )}
//         <input
//           name="author"
//           onChange={formik.handleChange}
//           value={formik.values.author}
//           placeholder="Author"
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.author && formik.errors.author && (
//           <div>{formik.errors.author}</div>
//         )}
//         <textarea
//           name="content"
//           onChange={formik.handleChange}
//           value={formik.values.content}
//           placeholder="Write a post..."
//           rows="3"
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.content && formik.errors.content && (
//           <div>{formik.errors.content}</div>
//         )}
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

export default CreateArea;

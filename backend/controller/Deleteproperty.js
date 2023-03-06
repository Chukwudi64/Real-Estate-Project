import Prop from "../model/Addproperty";

export const Deleteproperty = (req, res) => {
    Prop.findOneAndRemove({ title: req.body.title })
      .then((deleteddocument) => {
        if (deleteddocument != null) {
          res.status(200).send("Property Deleted Successfully!");
        } else {
          res.status(404).send("Invalid Name");
        }
      }) //CLOSE THEN
      .catch((err) => {
        return res.status(500).send({
          message: "DB Problem..Error in Delete ",
        });
      });
}
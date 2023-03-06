import Prop from "../model/Addproperty";

export const Property = (req, res) => { 

    Prop.find()
      .then(getalldocumentsfrommongodb => {
        res.status(200).send(getalldocumentsfrommongodb);
      }) //CLOSE THEN
      .catch(err => {
        res.status(500).send({ message: err.message || 'Error in Fetch Employee ' })
      });//CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION BODY Line 110     
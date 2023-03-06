import Prop from "../model/Addproperty";


export const Addproperty = async (req, res) => {
    try {
      const { title, city, location, price, bedroom, bathroom } = req.body;
      console.log(req.body);
      const prop = new Prop({
        title,
        city,
        location,
        price,
        bedroom,
        bathroom
    
      });
      await prop.save();
      res.status(201).json({ message: "Property Added Successfully" });
    } catch (err) {
      console.log(err);
    }
  
  }


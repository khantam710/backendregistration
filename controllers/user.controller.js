import userModel from "../models/user.model";

// CREATE USER
export const createUser = async (req, res) => {
    try {
        const { name, dob, gender, hobbies, address, state } = req.body;
        const resumePath = req.file ? req.file.path : null; // Multer saves file info in req.file

        // Create a new user instance
        const user = new userModel({
            name,
            dob,
            gender,
            hobbies,
            address,
            state,
            resumePath
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DISPLAY ALL USERS
export const getAllUserData = async (req, res) => {
    try {
      const userData = await userModel.find();
      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

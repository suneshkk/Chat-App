export const userSignUp = (req, res, next) => {
    try {
        res.json({ message: "User Signed Up Successfully" });
    } catch (error) {
        console.log(error);
       return next(error);
    }
}

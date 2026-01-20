export const errorHandller = (error, req, res, next) => {
    try {
        const statusCode = res.statusCode || 500;
        const message = error.message || "Internal Server Error";
        return res.status(statusCode).json({ success: false, message });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
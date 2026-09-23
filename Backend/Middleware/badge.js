import jwt from 'jsonwebtoken'
export const protect=async (req,res,next) => {
    try {
        const authHeader=req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({
                message:"No token provided"
            })
        }
        const token=authHeader.spli(" ")[1];
        const verify=jwt.verify(token,process.env.JWT_SECRET);
        req.user=verify;
        next()
    } catch (error) {
        res.status(401).json({
            message:"Invalid/Expired token"
        })
    }
}
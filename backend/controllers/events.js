const User = require('../models/event-model');


const newEvent = async (req,res) => {
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                ok:false,
                msg:'El email ya existe',
            })
        }
        user = new User(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password,salt);


        await user.save();
        return res.status(201).json({
            ok:true,
            id: user.id,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Por favor comunicarse con el administrador'
        })
    }
}

const loginUser = async (req,res) => {
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                ok:false,
                msg:'No existe un usuario registrado con ese email',
            });
        }
        const validPassword = bcrypt.compareSync(password,user.password);
        if(!validPassword){
            return res.status(400).json({ok:false, msg:'Password incorrecto'});
        }
        res.status(200).json({
            ok:true,
            id: user.id,
            name: user.name
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Por favor comunicarse con el administrador'
        });
    }

}

module.exports = {
    loginUser,
    newEvent
}
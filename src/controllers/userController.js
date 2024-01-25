import { db } from "../database/connection"

export default {

    /**
    * ? Endpoint para busca de usuários. Com ou sem filtros de email/nome. 
    * ---
    * @param email (str).
    * @param name (str).
    * ---
    * @return users(str) - Lista de usuários.
    */
    async get(req, res) {
        const { email, name } = req.query;

        try {
            const users = await db("rest_users")
                .select()
                .where((builder) => {
                    if(email) {
                        builder.where({ email });
                    }
                    if(name) {
                        builder.where('name', 'LIKE', `%${name}%`);
                    }
                });

            return res.status(200).json(users);

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                status: 400,
                message: "Problemas ao buscar o(s) usuário(s). Contate o administrador do sistema."
            })
        }
    },

}
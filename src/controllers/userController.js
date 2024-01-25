import { db } from "../database/connection"

export default {

    /**
    * ? Endpoint para busca de usuários. Com ou sem filtros de email/nome. 
    * ---
    * @param email (str).
    * @param name (str).
    * ---
    * @return users(arr) - Lista de usuários.
    */
    async get(req, res) {
        const { email, name } = req.query;

        try {
            const users = await db("rest_users")
                .select()
                .where((builder) => {
                    if (email) {
                        builder.where({ email });
                    }
                    if (name) {
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

    /**
    * ? Endpoint para busca de usuário pelo ID. 
    * ---
    * @param id ()
    * ---
    * @return user(obj) - Dados do usuário.
    */
    async getById(req, res) {
        const { id } = req.params;

        try {
            const user = await db('rest_users')
                .select()
                .first()
                .where({ id });

            if (!user) {
                return res.status(404).json({
                    status: "Not Found",
                    message: "Usuário não encontrado"
                });
            }

            return res.status(200).json(user);


        } catch (error) {
            console.log(error);
            return res.status(400).json({
                status: 400,
                message: "Problemas ao buscar o usuário. Contate o administrador do sistema."
            })
        }
    },

}
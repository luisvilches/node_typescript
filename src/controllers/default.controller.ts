import { GET, POST, route, middleware, Request, Response } from '../bin';
import { auth } from '../common/middleware/auth.middleware'
import { UserService } from '../services/user.service';
import { UserInterface } from '../models/users';

// @middleware([auth]) 
@route('/')
export class DefaultController {

    constructor(private readonly userService: UserService) { }

    @route('')
    public index(req: Request, res: Response) {
        res.json({ ok: true })
    }

    @route('all')
    @GET()
    public async all(req: Request, res: Response) {
        console.log('llega');
        let result = await this.userService.all();
        return res.json(result);
    }

    @route('all')
    @POST()
    public async create(req: Request, res: Response) {
        const { body } = req;

        let result = await this.userService.create(<UserInterface>{
            rut: body.rut,
            name: body.name,
            lastname: body.lastname,
            email: body.email,
            phone: body.phone,
            password: body.password,
            rol: body.rol,
            avatar: body.avatar,
            cargo: body.cargo
        });

        req.emitEvent('apply', result);

        return res.json(result);
    }
}
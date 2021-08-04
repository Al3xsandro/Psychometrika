import { AppError } from "../../../../shared/errors/AppError";

import { IClass } from "../../dtos/IClass.dto";
import { Class } from "../../schema/Class.schema";

class CreateClassCase {
    async execute({ 
        title
    }: IClass) {
        if(!title){
            throw new AppError('Bad request', 400)
        };

        const ClassAlreadyExists = await Class.findOne({ title: String(title) })

        if(ClassAlreadyExists){
            throw new AppError('This class already exists');
        };

        const CreateClass = await Class.create({ title: String(title)});

        return CreateClass;
    };
};

export { CreateClassCase };
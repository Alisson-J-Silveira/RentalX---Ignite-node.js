import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {
        const specificationAlderyExists = this.specificationsRepository.findByName(name);


        if (specificationAlderyExists) {
            throw new Error("Specification already exists!")
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase }
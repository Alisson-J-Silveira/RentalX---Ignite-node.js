import { Specification } from "../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./implementations/ISpecificationsRepository";



class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specifications);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((specifications) => specification.name === name);
        return specification;
    }

}

export { SpecificationsRepository }
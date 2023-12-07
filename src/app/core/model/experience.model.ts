import { TechnologiesUsedModel } from "./technologies-used";

export class ExperienceModel {
    id!: number;
    company!: string;
    position!: string;
    responsibilities!: string;
    startDate!: string;
    endDate!: string;
    logo!: string;
    technologiesUsed!: TechnologiesUsedModel[];
}

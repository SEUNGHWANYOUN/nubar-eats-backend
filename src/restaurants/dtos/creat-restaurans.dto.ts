import { IsString,IsBoolean,Length } from "class-validator";

const { Field, ArgsType } = require("@nestjs/graphql");

@ArgsType ()
export class CreateRestaurantsDTO {
    @Field(type => String) 
    name : String;

    @Field(type => Boolean)
    isVegan : boolean;

    @Field(type => String)
    adress : String;
    
    @Field(type => String)
    @IsString()
    @Length(2,5)
    ownersName : String;
}


const { Field, ArgsType } = require("@nestjs/graphql");

@ArgsType ()
export class CreateRestauransDTO {
    @Field(type => String)
    name : String;
    @Field(type => Boolean)
    isVegan : boolean;
    @Field(type => String)
    adress : String;
    @Field(type => String)
    ownersName : String;
}


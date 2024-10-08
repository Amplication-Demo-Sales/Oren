/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpportunityWhereUniqueInput } from "./OpportunityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OpportunityUpdateInput } from "./OpportunityUpdateInput";

@ArgsType()
class UpdateOpportunityArgs {
  @ApiProperty({
    required: true,
    type: () => OpportunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpportunityWhereUniqueInput)
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  where!: OpportunityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OpportunityUpdateInput,
  })
  @ValidateNested()
  @Type(() => OpportunityUpdateInput)
  @Field(() => OpportunityUpdateInput, { nullable: false })
  data!: OpportunityUpdateInput;
}

export { UpdateOpportunityArgs as UpdateOpportunityArgs };

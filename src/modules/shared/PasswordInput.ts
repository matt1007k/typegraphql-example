import { Field, InputType, ClassType } from "type-graphql";
//import { Min } from "class-validator";

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class PasswordInput extends BaseClass {
    @Field()
    password: string;
  }

  return PasswordInput;
};

import SimplifiedRuleEngineFactory from "react-jsonschema-form-conditionals/lib/engine/SimplifiedRuleEngineFactory";
import { StaticConfigResolver, LocalStorageFormManager, InstantUpdateStrategy } from "react-jsonschema-form-manager";

const simple = {
  schema: {
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
      },
      lastName: {
        type: "string",
        title: "Last name",
      },
      age: {
        type: "integer",
        title: "Age",
      },
      bio: {
        type: "string",
        title: "Bio",
      },
      password: {
        type: "string",
        title: "Password",
        minLength: 3,
      },
      telephone: {
        type: "string",
        title: "Telephone",
        minLength: 10,
      },
    },
  },
  uiSchema: {
    firstName: {
      classNames: "success",
      "ui:autofocus": true,
      "ui:emptyValue": "",
    },
    age: {
      "ui:widget": "updown",
      "ui:title": "Age of person",
    },
    bio: {
      "ui:widget": "textarea",
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
    },
    date: {
      "ui:widget": "alt-datetime",
    },
    telephone: {
      "ui:options": {
        inputType: "tel",
      },
    },
  },
  formData: {
    lastName: "Norris",
    bio: "Roundhouse kicking asses since 1940",
  },
  rules: [
    {
      conditions: { firstName: "empty" },
      event: {
        type: "remove",
        params: { field: ["password"] },
      },
    },
    {
      conditions: { age: { greater: 20 } },
      event: {
        type: "require",
        params: { field: ["telephone"] },
      },
    },
  ],
  rulesEngine: SimplifiedRuleEngineFactory,
};

const simpleConfig = {
  configResolver: new StaticConfigResolver(simple),
  manager: new LocalStorageFormManager("simple"),
  updateStrategy: new InstantUpdateStrategy()
};

export default simpleConfig;

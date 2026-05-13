import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    collection: "usuarios",
    timestamps: false,
  },
})
export class Usuario {
  @prop({ required: true, trim: true })
  public username!: string;
  @prop({ required: true, trim: true, unique: true })
  public biografia!: string;
  @prop({ required: true, trim: true, unique: true })
  public seguidores_count!: string;
}

export const UsuarioModel = getModelForClass(Usuario);

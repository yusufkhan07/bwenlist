import {
  Table,
  Model,
  Column,
  AllowNull,
  PrimaryKey
} from "sequelize-typescript";

@Table
export default class WebsiteModel extends Model<WebsiteModel> {
  @AllowNull(false)
  @PrimaryKey
  @Column({
    unique: true
  })
  place_id: string;

  @AllowNull(false)
  @Column
  website: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  formatted_phone_number: string;

  @AllowNull(false)
  @Column
  international_phone_number: string;
}

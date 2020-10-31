/* tslint:disable:variable-name */
import {Deserializable} from './deserializable.dto';

export class FooDto implements Deserializable {

  public id: string;
  public created_at: string;
  public modified_at: string;
  public name: string;
  public email: string;
  public text: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

}

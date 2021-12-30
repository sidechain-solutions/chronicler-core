import { BaseAsset } from 'lisk-sdk';

class ArchiveTextTransaction extends BaseAsset {
  name= "ArchiveTextTransaction";
  id = 101;

  schema = {
    $id: 'lisk/archivetext/transaction',
    type: 'object',
    required: ["data"],
    properties: {
        data: {
            dataType: 'string',
            fieldNumber: 1
        }
    }
  }

  static get TYPE() {
    return 101;
  }

  /* Set the transaction FEE to 10 TOKENS */

  static get FEE() {
    return `${10 * 10 ** 8}`;
  }

  validate({asset}) {
    const errors = [];
    const { title, text } = JSON.parse(asset.data);

    if (!title) {      
      errors.push(
        new Error(
          'Invalid "title" defined on transaction')
      );           
    }

    if (title.length > 128) {
      errors.push(new Error("A string value no longer than 128 characters"));
    }

    if (!text) {
      errors.push(
        new Error('Invalid "text" defined on transaction')
      );
    }

    if (text.length > 20000) {
      errors.push(new Error("A string value no longer than 20000 characters"));
    }    

    var result = "";
    errors.forEach(element => {
      result += element.toString();
    });
    throw new Error(result);
  }

  async apply({transaction}) {    
  }

  assetToBytes(asset) {
    const { data } = asset;

    return Buffer.from(data, "utf8");
  }

  assetFromSync(raw) {
    if (raw.tf_data) {
      // This line will throw if there is an error
      const data = raw.tf_data.toString("utf8");

      return { data };
    }

    return undefined;
  }
}

module.exports = ArchiveTextTransaction;

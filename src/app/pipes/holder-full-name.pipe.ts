import { Pipe, PipeTransform } from '@angular/core';

import { Holder } from '@services/dtos/entities/holder';

@Pipe({
  name: 'holderFullName'
})
export class HolderFullNamePipe implements PipeTransform {

  transform(holder: Holder): string {
    return `${holder.firstName} ${holder.lastName}`;
  }

}

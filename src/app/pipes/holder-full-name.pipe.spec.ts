import { HolderFullNamePipe } from './holder-full-name.pipe';
import {Holder} from "@services/dtos/entities/holder";

describe('HolderFullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new HolderFullNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform first name and last name to full name', () => {
    const pipe = new HolderFullNamePipe();
    const holder = { firstName: "firstName", lastName: "lastName"} as Holder;
    const correctFullName = `${holder.firstName} ${holder.lastName}`;
    expect(pipe.transform(holder)).toEqual(correctFullName);
  });

  it('should transform first name and empty last name to full name', () => {
    const pipe = new HolderFullNamePipe();
    const holder = { firstName: "firstName", lastName: ""} as Holder;
    const correctFullName = `${holder.firstName} ${holder.lastName}`;
    expect(pipe.transform(holder)).toEqual(correctFullName);
  });

  it('should transform empty first name and last name to full name', () => {
    const pipe = new HolderFullNamePipe();
    const holder = { firstName: "", lastName: "lastName"} as Holder;
    const correctFullName = `${holder.firstName} ${holder.lastName}`;
    expect(pipe.transform(holder)).toEqual(correctFullName);
  });

  it('should transform empty first name and empty last name to empty full name', () => {
    const pipe = new HolderFullNamePipe();
    const holder = { firstName: "", lastName: ""} as Holder;
    const correctFullName = `${holder.firstName} ${holder.lastName}`;
    expect(pipe.transform(holder)).toEqual(correctFullName);
  });

});

import React from 'react'
import Textfields from '../common_component/Textfields'

export default function Address() {
    return (
        <div>
            <div class="mb-8">
                <ul class="Tab_tab__UQhlM">
                    <li class="uppercase cursor-pointer Tab_tab-item__-Z09B Tab_tab-item--active__V9dHO">1. <span class="text-primary">Address
                    </span>
                    </li>
                    <li class="uppercase cursor-pointer Tab_tab-item__-Z09B ">2. <span class="">Tax Setup</span></li>
                </ul>
            </div>
            <div class="flex justify-center">
                <form>
                    <div class="my-auto mt-4 mb-10 flex flex-col w-full">
                        <Textfields/>
        <small class="omnipresent">The name of the legal entity.</small>
        </div>
        <div class="my-auto mt-4 mb-10 flex flex-col w-full">
            <label class="">Brand Name</label>
            <input type="text" maxlength="255" name="brand-name" class="
      Input_Input__mzdN8  border border-primary p-3 rounded" value="Home"/>
        <small class="omnipresent">If your company is publicly known by a different brand name, then please enter that here.</small>
        </div>
        <div class="my-auto mt-4 mb-10 flex flex-col w-full">
            <label class="required">Registered Address</label>
            <input type="text" maxlength="255" required="" name="address-line-one" placeholder="Enter your work address" class="
      Input_Input__mzdN8  border border-primary p-3 rounded" value=""/>
        <small class="omnipresent">If you have a GSTIN, provide the address mentioned on your GST certificate.</small>
        </div>
        <input type="text" maxlength="255" name="address-line-two" placeholder="Address line 2" class="
      Input_Input__mzdN8 mb-10 border border-primary p-3 rounded" value=""/>
        <div class="my-auto mt-10 flex flex-col w-full">
        <label class="required">State</label>
        <select class="undefined rounded p-3 " required="">
            <option value="1">Andaman and Nicobar Islands</option>
            <option value="2">Andhra Pradesh</option>
            <option value="3">Arunachal Pradesh</option>
            <option value="4">Assam</option>
            <option value="5">Bihar</option>
            <option value="6">Chandigarh</option>
            <option value="7">Chhattisgarh</option>
            <option value="8">Dadra and Nagar Haveli</option>
            <option value="9">Daman and Diu</option>
            <option value="10">Delhi</option>
            </select>
            </div>
            <div class="my-auto mt-4 mb-10 flex flex-col w-full">
                <label class="required">PIN Code</label>
      <input type="text" maxlength="6" required="" name="pincode" placeholder="Enter your PIN code" class="Input_Input__mzdN8  border border-primary p-3 rounded" value=""/>
        </div>
        <div class="text-xl mb-4">*Indicates required fields</div>
        <button type="submit" class=" btn Button_standard-button__kt0TN ">Continue</button>
        </form>
        </div>
        </div>
        
    )
}

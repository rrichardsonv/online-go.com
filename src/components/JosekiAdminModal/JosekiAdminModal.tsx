/*
 * Copyright (C) 2012-2017  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import * as ValidUrl from "valid-url";

import { JosekiAdmin, JosekiAdminProps } from "JosekiAdmin";
import { _ } from 'translate';
import { Modal, openModal } from "Modal";

declare let swal;

interface Events {
}


export class JosekiAdminModal extends Modal<Events, JosekiAdminProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Modal JosekiAdminModal" ref="modal">
                <div className="header">{_("Recent joseki updates")}</div>
                <div className="body">
                    <JosekiAdmin {... this.props} />
                </div>
                <div className="buttons">
                    <button onClick={this.close}>{_("Close")}</button>
                </div>
            </div>
        );
    }
}

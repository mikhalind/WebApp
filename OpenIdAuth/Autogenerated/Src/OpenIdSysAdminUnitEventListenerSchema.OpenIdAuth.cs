namespace BPMSoft.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: OpenIdSysAdminUnitEventListenerSchema

	/// <exclude/>
	public class OpenIdSysAdminUnitEventListenerSchema : BPMSoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public OpenIdSysAdminUnitEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public OpenIdSysAdminUnitEventListenerSchema(OpenIdSysAdminUnitEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6031c2b2-7861-40a6-9700-b2042b435ba9");
			Name = "OpenIdSysAdminUnitEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cafc62fc-f7d7-4a5d-acf5-62f836ef940a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,148,81,143,218,48,12,199,159,65,226,59,120,221,11,72,168,188,115,128,4,136,109,72,199,56,13,184,151,105,15,161,53,52,27,77,170,36,45,99,19,223,253,156,164,101,192,129,152,116,226,20,199,127,251,231,216,46,8,150,162,206,88,132,48,122,153,45,228,198,132,99,41,54,124,155,43,102,184,20,225,60,67,49,141,135,185,73,26,245,191,141,122,45,215,92,108,97,113,208,6,211,167,211,249,159,54,77,165,184,101,87,24,78,132,225,134,163,126,112,29,78,10,20,230,158,215,39,22,25,169,202,40,244,247,81,225,150,56,97,188,99,90,119,193,227,18,222,48,78,185,88,9,110,92,180,103,78,188,2,85,163,78,146,239,46,211,225,226,162,185,136,18,76,217,87,122,13,232,67,112,30,32,104,253,248,63,209,235,254,189,44,203,215,59,30,65,100,233,30,193,65,23,70,76,163,79,52,223,147,229,138,189,102,27,96,139,62,85,61,67,147,200,152,234,126,81,210,96,100,48,174,60,178,202,0,5,87,38,103,59,40,36,143,97,156,96,244,107,204,196,42,139,153,193,149,166,34,124,62,208,7,109,143,254,212,2,151,170,86,48,5,57,89,105,38,4,69,179,41,251,151,158,225,234,226,250,233,36,43,216,142,83,14,169,72,225,154,227,59,119,8,63,163,233,77,253,83,56,109,194,196,22,95,43,239,65,179,229,99,240,13,52,63,156,130,132,196,236,61,29,243,37,83,251,10,190,162,119,28,168,148,84,51,212,154,109,109,151,4,238,225,89,70,20,247,15,91,239,112,97,20,141,216,85,188,240,27,106,153,171,136,110,165,34,89,219,71,171,5,15,26,24,180,33,120,23,91,91,116,51,147,49,223,28,44,227,144,82,20,88,2,133,84,119,142,65,43,92,202,146,164,172,190,102,18,37,247,142,118,242,59,194,204,98,53,207,75,41,253,142,246,247,120,26,11,20,177,159,140,251,131,226,6,210,237,65,173,211,233,64,79,231,105,202,212,97,240,133,137,120,135,26,208,143,195,84,16,171,177,235,135,182,196,176,215,169,28,79,202,140,41,150,130,253,128,244,3,77,153,233,1,6,238,61,192,159,72,227,92,110,43,48,24,44,19,164,252,136,16,41,220,244,131,101,247,206,247,192,17,141,112,67,86,23,127,168,182,58,128,206,0,184,208,134,9,250,118,69,82,24,198,133,197,53,9,86,249,28,57,208,252,176,11,148,114,39,101,65,239,201,99,244,139,49,247,43,97,91,32,215,63,105,14,202,34,218,112,51,61,96,53,100,107,90,217,240,76,93,201,170,14,221,216,184,114,229,90,222,213,251,29,125,75,206,59,72,103,111,189,52,146,13,236,255,55,241,20,164,33,187,5,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateCantModifyUserActiveMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateCantModifyUserActiveMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("9bf23670-1e6a-e323-1820-4acf68e5b432"),
				Name = "CantModifyUserActiveMessage",
				CreatedInPackageId = new Guid("cafc62fc-f7d7-4a5d-acf5-62f836ef940a"),
				CreatedInSchemaUId = new Guid("6031c2b2-7861-40a6-9700-b2042b435ba9"),
				ModifiedInSchemaUId = new Guid("6031c2b2-7861-40a6-9700-b2042b435ba9")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6031c2b2-7861-40a6-9700-b2042b435ba9"));
		}

		#endregion

	}

	#endregion

}

